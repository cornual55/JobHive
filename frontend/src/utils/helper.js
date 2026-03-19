export const validateEmail = (email) => {
  if (!email.trim()) return "Укажите электронную почту";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Укажите верную электронную почтую";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Укажите пароль";
  if (password.length < 8) return "Пароль должен содержать минимум 8 символов";
  if (!/(?=.*[a-z])/.test(password))
    return "Пароль должен содержать минимум один строчный символ";
  if (!/(?=.*[a-z])/.test(password))
    return "Пароль должен содержать минимум один заглавный символ";
  if (!/(?=.\d)/.test(password))
    return "Пароль должен содержать минимум одну цифру";
  return "";
};

export const validateAvatar = (file) => {
  if (!file) return "";

  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (!allowedTypes.includes(file.type)) {
    return "Фото должно быть формата JPG или PNG";
  }

  const maxSize = 5 * 1024;
  if (file.size > maxSize) return "Фото должно иметь размер меньше 5МБ";

  return "";
};
