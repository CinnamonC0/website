export default {
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s – Cinnamon'
        }
      }
    }
  }

let darkMode = false;