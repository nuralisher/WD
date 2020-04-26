from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api.views.views import company_list, company_detail, vacancies_with_company, vacancy_detail, vacancy_list, top_ten_vacancies
from api.views.views_cbv import CompanyList, CompanyDetail, VacancyList, VacancyDetail, TopVacancyList, VacancyWithCompany

urlpatterns = [
    path('login', obtain_jwt_token),

    path('companies/', company_list),
    path('companies/<int:pk>', company_detail),
    path('companies/<int:pk>/vacancies', vacancies_with_company),
    path('vacancies', vacancy_list),
    path('vacancies/<int:pk>', vacancy_detail),
    path('vacancies/top_ten', top_ten_vacancies),
]

# urlpatterns = [
# path('login', obtain_jwt_token),
#
#     path('companies/', CompanyList.as_view()),
#     path('companies/<int:pk>', CompanyDetail.as_view()),
#     path('companies/<int:pk>/vacancies', VacancyWithCompany.as_view()),
#     path('vacancies', VacancyList.as_view()),
#     path('vacancies/<int:pk>', VacancyDetail.as_view()),
#     path('vacancies/top_ten', TopVacancyList.as_view()),
# ]