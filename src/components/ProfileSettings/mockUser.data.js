export const mockUser = {
  id: "usr_982347592834",
  personalInfo: {
    firstName: "Олександр",
    lastName: "Зінченко",
    username: "AlexBet99",
    email: "alex.zinchenko@example.com",
    phone: "+380 50 123 45 67",
    dateOfBirth: "1996-12-15",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    gender: "male",
    country: "Moldova",
    city: "Bebropol",
  },

  accountStatus: {
    isEmailVerified: true,
    kycStatus: "verified",
    vipLevel: "Gold",
    registrationDate: "2023-11-20T10:30:00Z",
  },

  balances: {
    currency: "$",
    realMoney: 25.5,
    bonusMoney: 1500.0,
  },

  security: {
    twoFactorEnabled: false,
    lastPasswordChange: "2024-01-15",
    lastLogin: {
      ip: "192.168.1.104",
      device: "Mac OS / Chrome",
      location: "Kyiv, Ukraine",
      date: "2026-03-08T18:45:00Z",
    },
  },

  preferences: {
    language: "uk",
    timeZone: "Europe/Kyiv",
    oddsFormat: "decimal",
    notifications: {
      emailPromos: true,
      smsAlerts: false,
      betSettled: true,
    },
  },
};
