from django.db import models
from django.utils.timezone import now

class SubMaster(models.Model):
    subject_name = models.CharField(max_length=100)
    fee_amount = models.FloatField()

    def __str__(self):
        return self.subject_name

class StdMaster(models.Model):
    standard_name = models.CharField(max_length=50)
    academic_year = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.standard_name} ({self.academic_year})"

class StudentInfo(models.Model):
    name = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=15)
    email = models.EmailField()
    school_name = models.CharField(max_length=150)
    board = models.CharField(max_length=50)
    standard = models.ForeignKey(StdMaster, on_delete=models.CASCADE)
    subject = models.ForeignKey(SubMaster, on_delete=models.CASCADE)
    medium = models.CharField(max_length=50)
    discount = models.FloatField(default=0.0)
    total_fees = models.FloatField()
    shift = models.CharField(max_length=50, choices=[('Morning', 'Morning'), ('Evening', 'Evening')])
    reference = models.CharField(max_length=100, blank=True, null=True)
    paid_amount = models.FloatField(default=0.0)
    remaining_amount = models.FloatField()
    fees_date = models.DateField(default=now)
    due_date = models.DateField()
    payment_mode = models.CharField(max_length=50, choices=[('Cash', 'Cash'), ('UPI', 'UPI'), ('Card', 'Card')])
    transaction_id = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

class ExternalFaculty(models.Model):
    faculty_name = models.CharField(max_length=100)
    faculty_subject = models.CharField(max_length=100)
    student_count = models.IntegerField()
    total_fees = models.FloatField()
    payable_fees = models.FloatField()
    paid_amount = models.FloatField(default=0.0)
    remaining_amount = models.FloatField()

    def __str__(self):
        return self.faculty_name
