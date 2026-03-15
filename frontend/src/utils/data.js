import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
} from "lucide-react";

export const jobSeekerFeatures = [
  {
    icon: Search,
    title: "Умный подбор вакансий",
    description:
      "Алгоритмы индивидуально подбирают вакансии на основе ваших навыков и предпочтений.",
  },
  {
    icon: FileText,
    title: "Построитель резюме",
    description:
      "Создавайте профессиональные резюме используя наши инструменты и шаблоны.",
  },
  {
    icon: MessageSquare,
    title: "Прямое общение",
    description: "Общайтесь с работодателем напрямую через нашу платформу.",
  },
  {
    icon: Award,
    title: "Оценка навыков",
    description: "Проверяйте свои навыки через тесты.",
  },
];

export const employerFeatures = [
  {
    icon: Users,
    title: "Подбор талантов",
    description: "Найдите идеально подходящего кандидата для вашей команды.",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Следите за эффективностью найма через панель управления.",
  },
  {
    icon: Shield,
    title: "Проверенные кандидаты",
    description: "Все кандидаты проходят проверку данных.",
  },
  {
    icon: Clock,
    title: "Быстрый найм",
    description:
      "Упрощенный и автоматизированный нашими инструментами процесс найма позволяет быстрее найти походящего кандидата.",
  },
];

export const NAVIGATION_MENU = [
  {
    id: "employer-dashboard",
    name: "Панель управления",
    icon: LayoutDashboard,
  },
  { id: "post-job", name: "Выложить вакансию", icon: Plus },
  { id: "manage-jobs", name: "Управление вакансиями", icon: Briefcase },
  { id: "company-profile", name: "Профиль компании", icon: Building2 },
];

export const CATEGORIES = [
  { value: "Engineering", label: "Инженерия" },
  { value: "Design", label: "Дизайн" },
  { value: "Marketing", label: "Маркетинг" },
  { value: "Sales", label: "Продажи" },
  { value: "IT & Software", label: "ИТ & ПО" },
  { value: "Customer-service", label: "Обслуживание клиентов" },
  { value: "Product", label: "Управление продуктами" },
  { value: "Operations", label: "Операционная деятельность" },
  { value: "Finance", label: "Финансы" },
  { value: "HR", label: "HR" },
  { value: "Other", label: "Остальное" },
];

export const JOB_TYPES = [
  { value: "Remote", label: "Удаленная" },
  { value: "Full-Time", label: "Полная занятость" },
  { value: "Part-Time", label: "Частичная занятость" },
  { value: "Shift", label: "Вахта" },
  { value: "Internship", label: "Стажировка" },
];

export const SALARY_RANGES = [
  "Менее 20 000 руб.",
  "20 000 руб. - 50 000 руб.",
  "Более 50 000 руб.",
];
