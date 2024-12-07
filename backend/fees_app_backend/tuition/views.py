from django.shortcuts import render
from django.http import JsonResponse
from .models import StudentInfo, ExternalFaculty
from django.db.models import Sum

def get_dashboard_data(request):
    students = StudentInfo.objects.all().count()
    faculties = ExternalFaculty.objects.all().count()
    total_fees = StudentInfo.objects.aggregate(total=Sum('total_fees'))['total'] or 0
    total_paid = StudentInfo.objects.aggregate(total=Sum('paid_amount'))['total'] or 0
    remaining = StudentInfo.objects.aggregate(total=Sum('remaining_amount'))['total'] or 0

    data = {
        'total_students': students,
        'total_faculties': faculties,
        'total_fees': total_fees,
        'total_paid': total_paid,
        'total_remaining': remaining
    }
    return JsonResponse(data)
