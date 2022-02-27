from email.policy import default
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from app_employee.models import Department,Employee
from app_employee.serializers import DepartmentSerializer,EmployeeSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def department_api(request,id=0):
    if request.method == 'GET':
        departments = Department.objects.all()
        departments_serializer = DepartmentSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Department Save Success', safe=False)
        return JsonResponse('Department Save Failed', safe=False)
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Department.objects.get(department_id=department_data['department_id'])
        department_serializer = DepartmentSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Department Update Success', safe=False)
        return JsonResponse('Department Update Failed', safe=False)
    elif request.method == 'DELETE':
        department = Department.objects.get(department_id=id)
        department.delete()
        return JsonResponse('Department Delete Success', safe=False)

@csrf_exempt
def employee_api(request,id=0):
    if request.method == 'GET':
        employees = Employee.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse('Employee Save Success', safe=False)
        return JsonResponse('Employee Save Failed', safe=False)
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employee.objects.get(employee_id=employee_data['employee_id'])
        employee_serializer = EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse('Employee Update Success', safe=False)
        return JsonResponse('Employee Update Failed', safe=False)
    elif request.method == 'DELETE':
        employee = Employee.objects.get(employee_id=id)
        employee.delete()
        return JsonResponse('Employee Delete Success', safe=False)

@csrf_exempt
def save_file(request):
    file=request.FILES['photo']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)