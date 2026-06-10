export const MONTH_KEYS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const MONTH_LABELS = {
  "pt-BR": {
    january: "Janeiro",
    february: "Fevereiro",
    march: "Marco",
    april: "Abril",
    may: "Maio",
    june: "Junho",
    july: "Julho",
    august: "Agosto",
    september: "Setembro",
    october: "Outubro",
    november: "Novembro",
    december: "Dezembro",
  },
  en: {
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
  },
};

const MONTH_ALIASES = {
  janeiro: "january",
  january: "january",
  fevereiro: "february",
  february: "february",
  marco: "march",
  march: "march",
  april: "april",
  abril: "april",
  may: "may",
  maio: "may",
  june: "june",
  junho: "june",
  july: "july",
  julho: "july",
  august: "august",
  agosto: "august",
  september: "september",
  setembro: "september",
  october: "october",
  outubro: "october",
  november: "november",
  novembro: "november",
  december: "december",
  dezembro: "december",
};

const normalizeText = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const getMonthKey = (monthValue) => {
  if (!monthValue) {
    return "";
  }

  if (MONTH_KEYS.includes(monthValue)) {
    return monthValue;
  }

  const normalized = normalizeText(monthValue);
  return MONTH_ALIASES[normalized] || "";
};

export const getMonthLabel = (monthValue, language = "en") => {
  const monthKey = getMonthKey(monthValue);
  if (!monthKey) {
    return monthValue || "";
  }

  const labels = MONTH_LABELS[language] || MONTH_LABELS.en;
  return labels[monthKey] || monthValue;
};

export const getMonthOptions = (language = "en") => {
  const labels = MONTH_LABELS[language] || MONTH_LABELS.en;
  return MONTH_KEYS.map((key) => ({ value: key, label: labels[key] }));
};

export const CATEGORY_OPTIONS = [
  { value: "Fixa", labelPt: "Fixa", labelEn: "Fixed" },
  { value: "Variavel", labelPt: "Variavel", labelEn: "Variable" },
];

export const SUBCATEGORY_OPTIONS = [
  { value: "Supermercado", labelPt: "Supermercado", labelEn: "Supermarket" },
  { value: "Aluguel", labelPt: "Aluguel", labelEn: "Rent" },
  { value: "Mortgage", labelPt: "Mortgage", labelEn: "Mortgage" },
  { value: "Brasil", labelPt: "Brasil", labelEn: "Brazil" },
  { value: "Seguro", labelPt: "Seguro", labelEn: "Insurance" },
  { value: "Wells", labelPt: "Custos Wells", labelEn: "Wells costs" },
  {
    value: "Bills",
    labelPt: "Contas (agua, luz, celular, internet)",
    labelEn: "Bills (water, electricity, mobile, internet)",
  },
  { value: "Carro", labelPt: "Carro", labelEn: "Car" },
  { value: "Academia", labelPt: "Academia", labelEn: "Gym" },
  { value: "Restaurante", labelPt: "Restaurante", labelEn: "Restaurant" },
  {
    value: "Transporte Publico",
    labelPt: "Transporte Publico",
    labelEn: "Public Transport",
  },
  {
    value: "Impostos e Taxas",
    labelPt: "Impostos e Taxas",
    labelEn: "Taxes and Fees",
  },
  { value: "Estudos", labelPt: "Estudos", labelEn: "Studies" },
  { value: "Viagem", labelPt: "Viagem", labelEn: "Travel" },
  { value: "Presentes", labelPt: "Presentes", labelEn: "Gifts" },
  {
    value: "Roupas",
    labelPt: "Roupas e calcados",
    labelEn: "Clothes and Shoes",
  },
  { value: "Saude", labelPt: "Saude", labelEn: "Health" },
  { value: "Casa", labelPt: "Casa", labelEn: "Home" },
  { value: "Lazer", labelPt: "Lazer", labelEn: "Leisure" },
  {
    value: "Higiene e Beleza",
    labelPt: "Higiene e Beleza",
    labelEn: "Hygiene and Beauty",
  },
  { value: "Poupanca Geo", labelPt: "Poupanca Geo", labelEn: "Geo Savings" },
  { value: "Savings", labelPt: "Savings", labelEn: "Savings" },
  { value: "Aposentadoria", labelPt: "Aposentadoria", labelEn: "Retirement" },
  { value: "Outros", labelPt: "Outros", labelEn: "Other" },
];

export const translations = {
  "pt-BR": {
    header: {
      title: "Meu Planejamento Financeiro",
      savedReports: "Ver Relatorios Salvos",
      language: "Idioma",
      portugueseBrazil: "Portugues (Brasil)",
      english: "Ingles",
      privacyPolicy: "Politica de Privacidade",
    },
    home: {
      welcome: "Bem vindo!",
      titleBase: "Planejamento Financeiro",
      createPlanning: "Crie seu Planejamento Financeiro",
    },
    common: {
      month: "Mes",
      year: "Ano",
      description: "Descricao",
      amount: "Valor",
      paymentDate: "Data de Pagamento",
      effectiveDate: "Data Efetiva",
      category: "Categoria",
      subcategory: "Subcategoria",
      actions: "Acoes",
      total: "Total",
      income: "Entradas",
      expenses: "Despesas",
      summary: "Resumo",
      addIncome: "Adicionar Entrada",
      addExpense: "Adicionar Despesa",
      saveReport: "Salvar Relatorio",
      reportSaved: "Relatorio salvo com sucesso!",
      reportNotFound: "Relatorio nao encontrado",
      reportLabel: "Relatorio",
      noData: "Nenhum relatorio salvo.",
      delete: "Deletar",
      duplicate: "Duplicar",
      createNewReport: "Crie um novo relatorio",
      addPeriod: "Adicione o periodo",
      planning: "Planejamento Financeiro",
      reportOf: "Relatorio de",
      totalIncome: "Total de Entradas",
      totalExpenses: "Total de Despesas",
      totalGeneral: "Total Geral",
      monthlyChart: "Grafico do Mes",
      yearlyChart: "Grafico do Ano",
      monthSummaryOf: "Resumo de",
      incomeExpensesOfYear: "Entradas e Despesas de",
      monthlyIncomeExpense: "Entradas e Saidas Mensais",
      notFoundPage: "404 - Pagina nao encontrada",
      notAvailable: "N/A",
      backToHome: "Voltar para Home",
      privacyTitle: "Politica de Privacidade",
      privacyLastUpdated: "Ultima atualizacao",
      privacyIntro:
        "Este aplicativo armazena os dados financeiros somente no seu navegador.",
      privacyStoredData: "Dados armazenados localmente",
      privacyStoredDataText:
        "savedReports, income, expenses e language sao gravados no LocalStorage do navegador.",
      privacySharing: "Compartilhamento de dados",
      privacySharingText:
        "Nao enviamos seus dados para servidor proprio nesta versao do projeto.",
      privacyResponsibility: "Sua responsabilidade",
      privacyResponsibilityText:
        "Se voce usar computador compartilhado, limpe os dados do navegador ao finalizar.",
      monthYearRequired: "Por favor, selecione o mes e o ano antes de salvar.",
    },
  },
  en: {
    header: {
      title: "My Financial Planner",
      savedReports: "View Saved Reports",
      language: "Language",
      portugueseBrazil: "Portuguese (Brazil)",
      english: "English",
      privacyPolicy: "Privacy Policy",
    },
    home: {
      welcome: "Welcome!",
      titleBase: "Financial Planning",
      createPlanning: "Create your Financial Plan",
    },
    common: {
      month: "Month",
      year: "Year",
      description: "Description",
      amount: "Amount",
      paymentDate: "Payment Date",
      effectiveDate: "Effective Date",
      category: "Category",
      subcategory: "Subcategory",
      actions: "Actions",
      total: "Total",
      income: "Income",
      expenses: "Expenses",
      summary: "Summary",
      addIncome: "Add Income",
      addExpense: "Add Expense",
      saveReport: "Save Report",
      reportSaved: "Report saved successfully!",
      reportNotFound: "Report not found",
      reportLabel: "Report",
      noData: "No saved reports.",
      delete: "Delete",
      duplicate: "Duplicate",
      createNewReport: "Create a new report",
      addPeriod: "Add period",
      planning: "Financial Planning",
      reportOf: "Report of",
      totalIncome: "Total Income",
      totalExpenses: "Total Expenses",
      totalGeneral: "Net Total",
      monthlyChart: "Monthly Chart",
      yearlyChart: "Yearly Chart",
      monthSummaryOf: "Summary of",
      incomeExpensesOfYear: "Income and Expenses of",
      monthlyIncomeExpense: "Monthly Income and Expenses",
      notFoundPage: "404 - Page not found",
      notAvailable: "N/A",
      backToHome: "Back to Home",
      privacyTitle: "Privacy Policy",
      privacyLastUpdated: "Last updated",
      privacyIntro: "This app stores financial data only in your browser.",
      privacyStoredData: "Data stored locally",
      privacyStoredDataText:
        "savedReports, income, expenses, and language are saved in browser LocalStorage.",
      privacySharing: "Data sharing",
      privacySharingText:
        "We do not send your data to our own backend server in this project version.",
      privacyResponsibility: "Your responsibility",
      privacyResponsibilityText:
        "If you use a shared computer, clear browser data when you finish.",
      monthYearRequired: "Please select month and year before saving.",
    },
  },
};

export const t = (language = "en", path = "") => {
  const source = translations[language] || translations.en;
  return (
    path
      .split(".")
      .reduce(
        (acc, part) => (acc && acc[part] !== undefined ? acc[part] : null),
        source,
      ) || path
  );
};
