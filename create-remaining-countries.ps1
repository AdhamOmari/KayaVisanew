$countries = @('finland', 'denmark', 'luxembourg', 'estonia', 'poland', 'liechtenstein', 'malta', 'slovakia', 'romania')

foreach ($country in $countries) {
    $countryCapitalized = $country.Substring(0,1).ToUpper() + $country.Substring(1)

    $jsonContent = @"
{
  "en": {
    "title": "$countryCapitalized Schengen Visa",
    "hero": {
      "subtitle": "Discover the beauty of $countryCapitalized"
    },
    "visa_types": [
      {
        "name": "Tourist Visa",
        "description": "For tourism, sightseeing, and visiting family or friends",
        "icon": "camera"
      },
      {
        "name": "Business Visa",
        "description": "For business meetings, conferences, and trade activities",
        "icon": "briefcase"
      },
      {
        "name": "Transit Visa",
        "description": "For transiting through $countryCapitalized to a third country",
        "icon": "plane"
      }
    ],
    "requirements": [
      "Valid passport (minimum 3 months validity beyond intended stay)",
      "Completed Schengen visa application form",
      "Two recent passport photographs",
      "Travel insurance (minimum €30,000 coverage)",
      "Flight reservation or itinerary",
      "Hotel bookings or accommodation proof",
      "Proof of sufficient financial means",
      "Cover letter explaining the purpose of visit"
    ],
    "processing_time": "15-30 calendar days",
    "validity": "Up to 90 days within 180 days period",
    "tips": [
      "Apply at least 15 days before your intended travel date",
      "Book appointments at the $countryCapitalized consulate or visa center early",
      "Ensure all documents are translated to English",
      "Provide detailed travel itinerary with dates and locations",
      "Show strong ties to your home country to prove you will return"
    ],
    "with_kaya": [
      "Complete application form assistance",
      "Document preparation and translation support",
      "Appointment scheduling at visa center",
      "Travel insurance arrangement",
      "Accommodation booking assistance",
      "Cover letter preparation"
    ],
    "attractions": [
      {
        "name": "$countryCapitalized Landmark 1",
        "image": "/schengen/$country/$countryCapitalized Landmark 1.webp"
      },
      {
        "name": "$countryCapitalized Landmark 2",
        "image": "/schengen/$country/$countryCapitalized Landmark 2.webp"
      },
      {
        "name": "$countryCapitalized Landmark 3",
        "image": "/schengen/$country/$countryCapitalized Landmark 3.webp"
      },
      {
        "name": "$countryCapitalized Landmark 4",
        "image": "/schengen/$country/$countryCapitalized Landmark 4.webp"
      },
      {
        "name": "$countryCapitalized Landmark 5",
        "image": "/schengen/$country/$countryCapitalized Landmark 5.webp"
      },
      {
        "name": "$countryCapitalized Landmark 6",
        "image": "/schengen/$country/$countryCapitalized Landmark 6.webp"
      }
    ],
    "cta": "Start your $countryCapitalized adventure today"
  },
  "ar": {
    "title": "تأشيرة الشنغن ل$countryCapitalized",
    "hero": {
      "subtitle": "اكتشف جمال $countryCapitalized"
    },
    "visa_types": [
      {
        "name": "تأشيرة سياحية",
        "description": "للسياحة ومشاهدة المعالم وزيارة العائلة أو الأصدقاء",
        "icon": "camera"
      },
      {
        "name": "تأشيرة عمل",
        "description": "لاجتماعات العمل والمؤتمرات والأنشطة التجارية",
        "icon": "briefcase"
      },
      {
        "name": "تأشيرة عبور",
        "description": "للعبور عبر $countryCapitalized إلى بلد ثالث",
        "icon": "plane"
      }
    ],
    "requirements": [
      "جواز سفر ساري المفعول (صلاحية 3 أشهر على الأقل بعد الإقامة المخطط لها)",
      "نموذج طلب تأشيرة الشنغن مكتمل",
      "صورتان حديثتان لجواز السفر",
      "تأمين سفر (تغطية لا تقل عن 30,000 يورو)",
      "حجز طيران أو خط سير الرحلة",
      "حجوزات فندقية أو إثبات الإقامة",
      "إثبات القدرة المالية الكافية",
      "خطاب تغطية يوضح الغرض من الزيارة"
    ],
    "processing_time": "15-30 يوماً تقويمياً",
    "validity": "حتى 90 يوماً خلال فترة 180 يوماً",
    "tips": [
      "قدم الطلب قبل 15 يوماً على الأقل من تاريخ السفر المخطط",
      "احجز المواعيد في القنصلية $countryCapitalized أو مركز التأشيرات مبكراً",
      "تأكد من ترجمة جميع المستندات إلى الإنجليزية",
      "قدم خط سير رحلة مفصلاً مع التواريخ والمواقع",
      "أظهر روابط قوية ببلدك الأصلي لإثبات أنك ستعود"
    ],
    "with_kaya": [
      "المساعدة الكاملة في نموذج الطلب",
      "إعداد المستندات ودعم الترجمة",
      "جدولة المواعيد في مركز التأشيرات",
      "ترتيب تأمين السفر",
      "المساعدة في حجز الإقامة",
      "إعداد خطاب التغطية"
    ],
    "attractions": [
      {
        "name": "معلم $countryCapitalized 1",
        "image": "/schengen/$country/$countryCapitalized Landmark 1.webp"
      },
      {
        "name": "معلم $countryCapitalized 2",
        "image": "/schengen/$country/$countryCapitalized Landmark 2.webp"
      },
      {
        "name": "معلم $countryCapitalized 3",
        "image": "/schengen/$country/$countryCapitalized Landmark 3.webp"
      },
      {
        "name": "معلم $countryCapitalized 4",
        "image": "/schengen/$country/$countryCapitalized Landmark 4.webp"
      },
      {
        "name": "معلم $countryCapitalized 5",
        "image": "/schengen/$country/$countryCapitalized Landmark 5.webp"
      },
      {
        "name": "معلم $countryCapitalized 6",
        "image": "/schengen/$country/$countryCapitalized Landmark 6.webp"
      }
    ],
    "cta": "ابدأ مغامرتك $countryCapitalized اليوم"
  }
}
"@

    $jsonContent | Out-File -FilePath "src/data/travel-$country.json" -Encoding UTF8
    Write-Host "Created travel-$country.json"
}