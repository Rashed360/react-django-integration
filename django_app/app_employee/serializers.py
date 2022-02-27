from dataclasses import fields
from rest_framework import serializers
from app_employee.models import Department,Employee

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('department_id','department_name')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('department','employee_id','employee_name','join_date','profile_photo')