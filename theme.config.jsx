export default {
        footer: (
          <small style={{ display: 'block', marginTop: '8rem' }}>
            <time>{YEAR}</time> © Cinnamon.
            <a href="/feed.xml">RSS</a>
            <style jsx>{`
              a {
                float: right;
              }
              @media screen and (max-width: 480px) {
                article {
                  padding-top: 2rem;
                  padding-bottom: 4rem;
                }
              }
            `}</style>
          </small>
        ),
        darkMode: true,
        useNextSeoProps() {
          const { asPath } = useRouter()
          if (asPath !== '/') {
            return {
              titleTemplate: '%s – Cinnamon'
            }
          }
        }
      }


