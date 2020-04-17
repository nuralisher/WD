from rest_framework import serializers
from api.models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=200)
    description = serializers.CharField(default='company description')
    city = serializers.CharField(max_length=200, default='Almaty')
    address = serializers.CharField(default='company address')

    def create(self, validated_data):
        company = Company.objects.create(name = validated_data.get('name'))
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class CompanySerializerM(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address',)

class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    company_id = serializers.IntegerField()

    class Meta:
        model = Vacancy
        fields = ('id','name', 'description', 'salary', 'company_id', 'company',)

class CompanyWithProductsSerializer(serializers.ModelSerializer):
    # vacancies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # vacancies = serializers.StringRelatedField(many=True, read_only=True)
    vacancies = VacancySerializer(many=True, read_only=True)
    class Meta:
        model = Company
        fields = ('vacancies',)