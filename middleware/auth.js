import { useAuth } from "../composables/state";

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth();
  return auth.value.isAuthenticated;
});
