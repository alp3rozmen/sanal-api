const HbysHastaBilgisiSorgulama = 
    {
        "durum": 1,
        "sonuc": {
            "operationResult": {
                "resultCode": 200,
                "resultMessage": "İşlem Başarılı",
                "resultMessageComplex": null
            },
            "returnEntity": {
                "FileResult": {
                    "FileContents": "AABERi0xLjMNCjEgMCBvYmoNClsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJX",
                    "ContentType": "application/pdf",
                    "FileDownloadName": "Vaka-11111.pdf"
                },
                "status": true,
                "information": "Hasta Bilgileri getirildi.",
                "integrationID": null
            }
        },
        "mesaj": "İşlem Başarılı"
    }
    

const HbysDoktorOnayVerme =
    {
        "durum": 1,
        "sonuc": {
        "durum": true,
        "bilgi": "Onaylandı.",
        "takipId": "2865"
        },
        "mesaj": "İşlem Başarılı"
    }


    module.exports = {
        HbysHastaBilgisiSorgulama: HbysHastaBilgisiSorgulama,
        HbysDoktorOnayVerme: HbysDoktorOnayVerme
    };
    