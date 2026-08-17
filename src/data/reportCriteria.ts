export interface ReportCriterion {
  id: string;
  title: string;
  description: string;
  icon: 'tone' | 'time' | 'resolution';
}

export const reportCriteria: ReportCriterion[] = [
  {
    id: 'tone',
    title: 'Тон спілкування',
    description:
      'Аналіз мовних маркерів роздратування, підвищеного тону чи ввічливості в репліках клієнта та оператора протягом розмови.',
    icon: 'tone',
  },
  {
    id: 'time',
    title: 'Час очікування',
    description:
      'Тривалість пауз і час до першої реакції оператора на звернення — довге очікування підвищує ризик негативної оцінки.',
    icon: 'time',
  },
  {
    id: 'resolution',
    title: 'Вирішення запиту',
    description:
      'Чи отримав клієнт відповідь по суті питання за один дзвінок, чи довелося звертатися повторно.',
    icon: 'resolution',
  },
];
