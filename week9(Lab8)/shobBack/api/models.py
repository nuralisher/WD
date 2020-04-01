from django.db import models

# Create your models here.




class Category(models.Model):
    name = models.CharField(max_length=200)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class Product(models.Model):
    name = models.CharField(max_length=200,)
    price = models.IntegerField(default=10000)
    description = models.TextField(default='default description of product')
    count = models.IntegerField(default=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'category': self.category.name
        }
