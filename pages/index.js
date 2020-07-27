import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import MainLayout from '../components/ui/MainLayout'

const Index = () => (
  <MainLayout
    containerClassName="flex flex-col justify-between bg-cover bg-no-repeat bg-center py-8 px-6 md:p-12"
    containerStyle={{
      backgroundImage: 'url(/andras-vas-Bd7gNnWJBkU-unsplash.jpg)',
    }}
  >
    <div className="text-white text-center md:text-left">
      <h1 className="text-2xl md:text-4xl">Allan Christian</h1>
      <h2 className="text-base md:text-lg">Full Stack Developer</h2>
    </div>

    <div className="text-white text-center md:text-left">
      <FontAwesomeIcon
        icon={faEnvelope}
        fixedWidth
        size="2x"
        className="mx-2 cursor-pointer hover:text-gray-400 transitiontransition-colors duration-200"
        onClick={() => {
          const win = window.open('mailto:me@allanchristian.dev', 'emailWindow')
          if (win && win.open && !win.closed) win.close()
        }}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        fixedWidth
        size="2x"
        className="mx-2 cursor-pointer hover:text-gray-400 transition transition-colors duration-200"
        onClick={() =>
          (window.location = 'https://www.linkedin.com/in/neeonline/')
        }
      />
    </div>
  </MainLayout>
)

export default Index
