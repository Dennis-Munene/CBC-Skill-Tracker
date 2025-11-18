export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load logged-in profile if cookie token exists
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await fetchProfileApi();
        setUser(res.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const login = async (data) => {
    const res = await loginApi(data);
    setUser(res.user);
    return res;
  };

  const register = async (data) => {
    const res = await registerApi(data);
    setUser(res.user);
    return res;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
  };
}
