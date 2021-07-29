const Pages = {
  DEFAULT: "/admin/dashboard",
  DASH_BOARD: "/admin/dashboard",
  NOT_FOUND: "/not-found",

  SIGN_IN: "/sign-in",
  FORGOT_PASSWORD: "/forgot-password",

  USER: "/admin/users",
  CREATE_USER: "/admin/users/create",
  EDIT_USER: "/admin/users/:userId",
  GET_USER: (id: string | number) => `/admin/users/${id}`,

  VENDOR: "/admin/vendors",
  CREATE_VENDOR: "/admin/vendors/create",

  PRODUCT: "/admin/products",
  CREATE_PRODUCT: "/admin/products/create",

  CATEGORY: "/admin/categories",
};

export default Pages;