from django.db import models

class Department(models.Model):
    department_id = models.AutoField(primary_key=True)
    department_name = models.CharField(max_length=100)
    def __str__(self):
        return self.department_name

class Employee(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.CharField(max_length=100)
    join_date = models.DateField(auto_now_add=True)
    profile_photo = models.CharField(max_length=100)
    def __str__(self):
        return self.employee_name
