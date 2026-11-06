# Marketplace Core — منصة سوق: عقارات • سيارات • كل شيء

[![CI](https://github.com/aslamalkarywk7/marketplace-core/actions/workflows/ci.yml/badge.svg)](https://github.com/aslamalkarywk7/marketplace-core/actions/workflows/ci.yml)

> **منصة سوق شاملة** — بيع عقارات، سيارات، ومنتجات — **بواجهة أمازون** (شريط بحث، أقسام، كروت منتجات، سلة، فلاتر سعر).

## ماذا ستتعلم من هذا المشروع؟

- **Unified Marketplace:** 3 فئات في منصة واحدة (Real Estate + Cars + General)
- **Amazon-like UI:** Header + Search + Categories + Product Cards + Filters + Cart
- **General Commerce:** بحث + فلاتر سعر + ترتيب + تقييمات + بائعين
- **Payments:** Stripe Sandbox — Checkout + Webhooks
- **Production Auth:** NextAuth + RBAC (Buyer / Seller / Admin)

## التصميم — شبيه أمازون

```
┌──────────────────────────────────────────────────────────────┐
│  🛒 SouqCore   [🔍 ابحث عن منتج، سيارة، عقار...]  👤  🛒(3) │
├──────────────────────────────────────────────────────────────┤
│  الرئيسية  عقارات  سيارات  منتجات  إلكترونيات  أثاث  خدمات   │
├──────────────────────────────────────────────────────────────┤
│  📍 مصر  |  التوصيل مجاني فوق 500 ج.م  |  خصومات حتى 50%   │
├──────────────────────────────────────────────────────────────┤
│  🏠 سيارات مستعملة              🎧 إلكترونيات                │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────────┐ │
│ │   صورة      │ │   صورة      │ │   صورة      │ │ صورة  │ │
│ │ تويوتا 2022 │ │ شقة 3غرف    │ │ سماعات     │ │ ساعة  │ │
│ │ 850,000 ج.م │ │ 2.5م ج.م    │ │ 1,299 ج.م   │ │ 999   │ │
│ │ ⭐⭐⭐⭐☆   │ │ ⭐⭐⭐⭐⭐  │ │ ⭐⭐⭐⭐☆   │ │ 4.5★  │ │
│ │ [أضف للسلة] │ │ [تواصل]     │ │ [أضف للسلة] │ │ [سلة] │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └────────┘ │
├──────────────────────────────────────────────────────────────┤
│  📱 حمّل التطبيق  •  خدمة العملاء  •  سياسة البيع  •  ©    │
└──────────────────────────────────────────────────────────────┘
```

## Stack

```
Next.js 14 (App Router) + TypeScript
Prisma + PostgreSQL (Neon Free)
NextAuth v5 + RBAC
Stripe Sandbox (free)
Tailwind CSS
```

## الفئات

| الفئة | مثال | الاختلاف |
|---|---|---|
| **عقارات** | شقة • فيلا • محل | المعاينة + التواصل مع المالك (بدون دفع فوري) |
| **سيارات** | تويوتا • مرسيدس • بي إم دبليو | فحص تقني + تمويل |
| **منتجات** | إلكترونيات • أثاث • أزياء | شحن + دفع فوري + إرجاع |

## Quick Start

```bash
git clone https://github.com/aslamalkarywk7/marketplace-core.git
cd marketplace-core
npm install
cp .env.example .env.local
npm run db:push && npm run db:seed
npm run dev
```

## بنية المشروع

```
marketplace-core/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # شريط البحث العلوي (أمازون)
│   │   ├── ProductCard.tsx   # كرت منتج
│   │   ├── CategoryBar.tsx   # أقسام الفئات
│   │   ├── FiltersPanel.tsx  # فلاتر سعر وفئة
│   │   └── CartDrawer.tsx    # سلة جانبية
│   ├── pages/                # Next.js App Router
│   ├── store/cart.ts         # حالة السلة (Zustand)
│   └── api/                  # Next.js API Routes
├── prisma/schema.prisma      # User + Listing + Order + Cart
└── .github/workflows/ci.yml
```

## Live Demo

[https://marketplace-core.vercel.app](https://marketplace-core.vercel.app) — deploy مجاني

## License

MIT © Islam Al-Nashar
