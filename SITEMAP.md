# Kaya Travel Agency - Complete Site Structure

## 📋 Complete Page Sitemap

### 1. الصفحة الرئيسية / Home Page
**URL**: `/`
**Features**:
- Full-width hero section with background image
- Headline with CTA buttons
- 6 featured service cards (Second Citizenship, USA Visas, Schengen, Study, Travel, Work)
- "Why Choose Us" section with 4 benefits
- Additional services showcase (4 cards)
- Final CTA section

### 2. الجنسية الثانية / Second Citizenship
**URL**: `/second-citizenship`
**Features**:
- Hero section with subtitle
- Introduction with 4 benefit cards
- 5 Caribbean country cards:
  - Antigua and Barbuda
  - Dominica
  - St Kitts and Nevis
  - St Lucia
  - Grenada
- Each card includes benefits list
- 4-step application process
- CTA section

**Sub-pages (ready for content)**:
- `/second-citizenship/antigua-barbuda`
- `/second-citizenship/dominica`
- `/second-citizenship/st-kitts-nevis`
- `/second-citizenship/st-lucia`
- `/second-citizenship/grenada`

### 3. تأشيرات أمريكا / USA Visas
**URL**: `/usa-visas`
**Features**:
- Hero section
- 3 main visa category cards:
  - Tourism & Business (B1/B2)
  - Study Visas (F1/F2, M1/M2)
  - Exchange Visitor (J1/J2)
- 12 J1/J2 exchange categories grid
- General requirements section
- Benefits card
- CTA section

**Sub-pages (ready for content)**:
- `/usa-visas/tourism`
- `/usa-visas/study`
- `/usa-visas/exchange`

### 4. تأشيرات الشنغن / Schengen Visas
**URL**: `/schengen-visas`
**Features**:
- Hero section
- Schengen visa explanation
- 12 country cards with flags:
  - France, Italy, Spain, Germany
  - Netherlands, Portugal, Austria
  - Denmark, Luxembourg, Belgium
  - Poland, Slovenia
- Required documents section (6 cards)
- 4-step application process
- CTA section

**Sub-pages (ready for content)**:
- `/schengen-visas/france`
- `/schengen-visas/italy`
- `/schengen-visas/spain`
- And more for each country...

### 5. تأشيرات الدراسة / Study Visas
**URL**: `/study-visas`
**Features**:
- Hero section
- 6 study destination cards:
  - USA, Canada, UK
  - Australia, Germany, Spain
- Each links to detailed page
- CTA section

**Sub-pages (ready for content)**:
- `/study-visas/usa`
- `/study-visas/canada`
- `/study-visas/uk`
- `/study-visas/australia`
- `/study-visas/germany`
- `/study-visas/spain`

### 6. تأشيرات السفر / Travel Visas
**URL**: `/travel-visas`
**Features**:
- Hero section
- 9 popular destination cards with flags:
  - USA, Canada, UK, Australia
  - Mexico, China, Japan
  - UAE, Qatar
- CTA section

### 7. تأشيرات العمل / Work Visas
**URL**: `/work-visas`
**Features**:
- Hero section
- 7 work visa program cards:
  - EU Blue Card
  - Germany Points System
  - Germany Job Seeker
  - UAE Job Seeker
  - Qatar Job Seeker
  - USA H1B
  - USA H2B
- Each with detailed description
- CTA section

### 8. برامجنا / Our Programs
**URL**: `/programs`
**Features**:
- Hero section
- 6 comprehensive program cards:
  - Citizenship Programs
  - Student Programs
  - Work Programs
  - Family Reunion
  - Business Immigration
  - Relocation Services
- CTA section

### 9. قسم خدماتنا / Our Services Section
**URL**: `/services`
**Features**:
- Hero section
- 7 service cards with icons:
  - Translation
  - Flight Booking
  - Hotel Booking
  - Motivation Letter
  - Cover Letter
  - Travel Itinerary
  - Travel Insurance
- "Why Our Services Stand Out" section
- CTA section

### 10. المدونة / Blog
**URL**: `/blog`
**Features**:
- Hero section
- 6 blog post cards with:
  - Category badges
  - Post titles and excerpts
  - Publication dates
  - Read more buttons
- Ready for dynamic content

### 11. تواصل معنا / Contact Us
**URL**: `/contact`
**Features**:
- Hero section
- Professional contact form:
  - Name, Email, Phone
  - Subject, Message
  - Submit button
- Contact information card:
  - Office address
  - Email addresses
  - Phone numbers
  - Working hours
- Social media links card
- Form validation

### 12. شركاؤنا / Our Partners
**URL**: `/partners`
**Features**:
- Hero section
- 8 partner organization cards:
  - Logo placeholders
  - Names and categories
- "Become a Partner" section
- CTA button

### 13. فريق كايا / Kaya Team
**URL**: `/team`
**Features**:
- Hero section
- 6 team member cards:
  - Profile image placeholders
  - Names and roles
  - Short bios
  - Social media links (LinkedIn, Twitter, Email)
- "Join Our Team" section
- Careers CTA

### 14. محتوى نهاية الموقع / Footer Content
**Component**: Footer (on all pages)
**Features**:
- About Kaya section with description
- Social media icons
- Quick Links column
- Services column
- Newsletter subscription form
- Contact information
- Copyright and legal links

## 🎨 Design Elements Used Throughout

### Navigation (All Pages)
- Sticky navbar with dropdown menus
- Mega menu for complex sections
- Language switcher (EN/AR)
- Responsive mobile menu
- Smooth scroll behavior

### Common Components
- **Hero Sections**: Full-width with overlay, title, subtitle, CTA buttons
- **Card Layouts**: Shadow, hover effects, rounded corners
- **CTA Sections**: Full-width gradient backgrounds
- **Feature Cards**: Icon + title + description
- **Buttons**: Primary (navy) and Secondary (gold) with hover animations

### Color Usage
- **Primary (#1c3269)**: Navbar, primary buttons, main headings
- **Secondary (#E2BC42)**: CTA buttons, accents, hover states
- **Background (rgb(128, 139, 141))**: Page background
- **White**: Card backgrounds, alternating sections

### Responsive Breakpoints
- Mobile: < 768px (stacked layouts)
- Tablet: 768px - 991px (2-column grids)
- Desktop: 992px+ (3-4 column grids)

## 🌍 Bilingual Support

Every page includes:
- ✅ English translations in `/src/locales/en.json`
- ✅ Arabic translations in `/src/locales/ar.json`
- ✅ Automatic RTL layout for Arabic
- ✅ Language persistence in browser
- ✅ Instant language switching

## 📱 Mobile Responsiveness

All pages feature:
- ✅ Mobile-first design
- ✅ Collapsible navigation
- ✅ Touch-friendly buttons
- ✅ Optimized images
- ✅ Readable typography on all screens

## 🔗 Internal Linking

All navigation is interconnected:
- Navbar links to all main sections
- Footer quick links
- CTA buttons throughout
- Service cards link to relevant pages
- Blog posts ready for dynamic links

## 🎯 Ready to Customize

All content is easily editable in:
- Page files: `/src/app/[page]/page.tsx`
- Translations: `/src/locales/*.json`
- Styles: `/src/app/globals.css`
- Components: `/src/components/*.tsx`

---

**Total Pages**: 13 main pages + Footer + Navigation
**Total Routes**: 30+ (including sub-pages)
**Languages**: English & Arabic (full support)
**Status**: ✅ Complete and Running
