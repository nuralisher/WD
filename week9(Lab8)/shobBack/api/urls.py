from django.urls import path
from api.views import category_list, product_list, product_detail, category_detail, products_with_category

urlpatterns = [
    path('categories/', category_list),
    path('products/', product_list),
    path('products/<int:id>/', product_detail),
    path('categories/<int:id>/', category_detail),
    path('categories/<int:id>/products/', products_with_category),
]