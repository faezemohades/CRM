import { BsPerson } from 'react-icons/bs';
import { MdContentCopy } from 'react-icons/md';
import { TbMessageReport } from 'react-icons/tb';
import { RiBillLine } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';

export const sideBar = [
    {
        "title": "",
        "links": [
            {
                "name": "داشبورد",
                "link": "/",
                "icon": BsPerson
            },
            {
                "name": "رمز عبور",
                "link": "changePassword",
                "icon": RiLockPasswordLine
            }
        ]
    },
    {
        "title": "گزارشات",
        "links": [
            {
                "name": "محتوا",
                "link": "content",
                "icon": MdContentCopy
            },
            {
                "name": "گزارش ترافیک",
                "link": "trafic",
                "icon": TbMessageReport
            },
            {
                "name": "گزارش مالی",
                "link": "bill",
                "icon": RiBillLine
            }
        ]
    }
];

export const languages = [
    {
        "label": "همه",
        "value":""
    },
    {
        "label": "زیرنویس چسبیده",
        "value": "زیرنویس چسبیده"
    },
    {
        "label": "زیرنویس فارسی",
        "value": "زیرنویس فارسی"
    },
    {
        "label": "دوبله پیشتازمووی",
        "value": "دوبله پیشتازمووی"
    },
];

export const typeIncome = [
    {
        "label": "همه",
        "value": ""
    },
    {
        "label": "Aggregation",
        "value": "Aggregation"
    },
    {
        "label": "MCI",
        "value": "mci"
    },
    {
        "label": "Irancell",
        "value": "mtni"
    }, {
        "label": "Rightel",
        "value": "rtl"
    },
];


export const billColumns = ['ردیف', 'نوع حساب ', 'شرح', 'تاریخ', 'بستانکار(ریال)', 'مانده (ریال) '];

export const trafficColumns = ['ردیف', 'هاست', 'عنوان', 'ترافیک(گیگ)', 'تاریخ', 'نوع درآمد'];


export const contentColumns = ['ردیف', 'عنوان فارسی', 'عنوان لاتین', 'زبان', 'وضعیت', 'سال انتشار', 'جزییات'];


export const hostColumns = ['نام هاست', 'ای پی', 'مدیر', 'وضعیت'];