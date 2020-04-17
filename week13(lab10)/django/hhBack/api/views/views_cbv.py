from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, CompanySerializerM, VacancySerializer, CompanyWithProductsSerializer

class CompanyList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    

class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializerM
    permission_classes = (IsAuthenticated,)


class VacancyList(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = (IsAuthenticated,)

class VacancyDetail(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = (IsAuthenticated,)

class TopVacancyList(generics.ListAPIView):
    queryset = Vacancy.objects.all().order_by('-salary', 'name')[:10]
    serializer_class = VacancySerializer
    permission_classes = (IsAuthenticated,)

class VacancyWithCompany(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanyWithProductsSerializer;