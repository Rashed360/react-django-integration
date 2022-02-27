from django.urls import path
from app_employee import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('department/', views.department_api),
    path('department/<id>/', views.department_api),
    path('employee/', views.employee_api),
    path('employee/<id>/', views.employee_api),
    path('photo/', views.save_file),
]

urlpatterns += static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)