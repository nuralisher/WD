from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Category, Book, Author, UserProfile

#first Serializer
class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

#second Serializer
class AuthorSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        author = Author.objects.create(name=validated_data.get('name'))
        return author

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class BookSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    author = AuthorSerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    author_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Book
        fields = ('id', 'name', 'description', 'rating', 'status', 'category', 'category_id', 'author', 'author_id')

# class CategoryBooks(serializers.ModelSerializer):
#     books = BookSerializer(many=True, read_only=True)
#
#     class Meta:
#         model = Category
#         fields = ('id', 'name', 'books')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username',)


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    books = BookSerializer(many=True, read_only=True)

    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'name', 'user_id', 'books')


# class UserBookSerializer(serializers.ModelSerializer):
#     category = CategorySerializer(read_only=True)
#     author = AuthorSerializer(read_only=True)
#     category_id = serializers.IntegerField(write_only=True)
#     author_id = serializers.IntegerField(write_only=True)
#     userProfile = UserProfileSerializer(read_only=True)
#     userProfile_id = serializers.IntegerField(read_only=True)
#
#     class Meta:
#         model = Book
#         fields = ('id', 'book_id', 'name', 'description', 'category', 'category_id', 'author', 'author_id', 'userProfile', 'userProfile_id')