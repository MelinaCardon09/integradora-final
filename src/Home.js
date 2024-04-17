import React from 'react'
import ahorro from './assets/ahorro.jpg'
import inversion from './assets/descarga.png'
import factura from './assets/factura.png'
import './Home.css';

function Home() {
  return (
    <div>
        <header>
          <div className="container-hero">
            <div className="container hero">
              <div className="container-logo">
                <h1 className='logo'><a href="#">La Cosecha del Bienestar </a></h1>
              </div>	
              
            </div>
          </div>

            <div className="container-navbar">
              <nav className="navbar container">
                <i className="fa-solid fa-bars"></i>
                <ul className="menu">
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Nuestros Servicios</a></li>
                  <li><a href="#">¿QUIÉNES SOMOS?</a></li>
                </ul>

                {/*<form class="search-form">
                  <input type="search" placeholder="Buscar..." />
                  <button class="btn-search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                              </form>*/}
              </nav>
            </div>
          </header>
              <section className="banner">
            <div className="content-banner">
              <p>SOMOS TU MEJOR OPCIÓN</p>
              <h2>En nuestro banco en linea, nos esforzamos por ofrecer la mejor experiencia bancaria digital para ti ¡Únete a nosotros y descubre el futuro del banco en linea!<br /></h2>
              <a href="#">Iniciar ahora</a>
            </div>
          </section>

          <main className="main-content">
              <section className="container container-features">
                <div className="card-feature">
                  <i className="fa-solid fa-plane-up"></i>
                  <div className="feature-content">
                    <span>Realiza todas tus operaciones sin salir de casa</span>
                    <p>Comenzar ahora</p>
                  </div>
                </div>
                <div className="card-feature">
                  <i className="fa-solid fa-wallet"></i>
                  <div className="feature-content">
                    <span>La App no consume los datos de tu celular</span>
                    <p>Aprovecha nuestras ofertas</p>
                  </div>
                </div>
                <div className="card-feature">
                  <i className="fa-solid fa-gift"></i>
                  <div className="feature-content">
                    <span>¿Necesitas dinero?</span>
                    <p>Pidelo aquí</p>
                  </div>
                </div>
                <div className="card-feature">
                  <i className="fa-solid fa-headset"></i>
                  <div className="feature-content">
                    <span>Servicio al cliente 24/7</span>
                    <p>LLámenos 24/7 al 123-456-7890</p>
                  </div>
                </div>
              </section>

              <section className="container top-categories">
                <h1 className="heading-1">Nuestros Servicios</h1>
                <div className="container-categories">
                  <div className="card-category category-moca">
                    <p>Tarjeta de Crédito</p>
                   
                    
                  </div>
                  <div className="card-category category-expreso">
                    <p>Tarjeta de Débito</p>
                    
                  </div>
                  <div className="card-category category-capuchino">
                    <p>Finanzas</p>
                    
                  </div>
                </div>
              </section>

              <section className="container top-products">
                <h1 className="heading-1" name="about">¿QUIÉNES SOMOS?</h1>

                <div className="container-options">
                  <span className="active">Somos un banco en linea que ofrece soluciones financieras innovadoras y accesibles para satisfacer las necesidades de nuestros clientes en el mundo digital. Nuestro enfoque esta en la comodidad,seguridad y eficiencia, brindando una amplia gama de servicios</span>
                </div>

                <div className="container-products">
                  <div className="card-product">
                    <div className="container-img">
                      <img src={ahorro} alt="Ahorro" />
                      
                    </div>
                    <div className="content-card-product">
                      <div className="stars">
                      </div>
                      <h3>Ahorro</h3>
                      <span >
                                        <p >Ahorrar es resguardar tu dinero desde hoy para que en un futuro puedas invertirlo en algo que consideres valioso. Tal vez estos cambios no se vean reflejados de inmediato, pero pueden hacer que tu dinero rinda más.</p>
                      </span>
                    </div>
                  </div>
                  <div className="card-product">
                    <div className="container-img">
                      <img
                        src={inversion}
                        alt="Inversión-ingles.jpg"
                      />
                    
                    </div>
                    <div className="content-card-product">
                      <div className="stars">
                      </div>
                      <h3>Inversión</h3>
                      <span />
                      <p>La evolución financiera es una realidad tangible. Desde la conveniencia hasta la seguridad, desde la funcionalidad hasta la atención personalizada, estamos aquí para ofrecerte una experiencia bancaria sin igual.</p>
                    </div>
                  </div>
                  
                  <div className="card-product">
                    <div className="container-img">
                      <img
                        src={factura}
                        alt="Pagos de Facturas"
                      />
                      
                    </div>
                    <div className="content-card-product">
                        
                      </div>
                      <h3>Pagos de Facturas</h3>
                      <span >
                        <p>Una función que permita a los usuarios pagar sus facturas en línea de manera conveniente, ya sea manualmente o mediante programación de pagos automáticos.</p>
                      </span>
                    </div>
                </div>
              </section>
            </main>
				

		<footer className="footer">
			<div className="container container-footer">
				<div className="menu-footer">
					<div className="contact-info">
						<p className="title-footer">Información de Contacto</p>
						<ul>
							<li>
								Dirección: Garza Sada·11123 Monterrey,Nl
							</li>
							<li>Teléfono: 📞123-456-7890</li>
							<li>EmaiL: 📨cosechadelbienestar@gmail.com</li>
						</ul>
						
					</div>

					<div className="newsletter">
						<p className="title-footer">Boletín informativo</p>

						<div className="content">
							<p>
								Suscríbete a nuestros boletines ahora y mantente al
								día con nuevas ofertas exclusivas.
							</p>
							
						</div>
					</div>
				</div>

				<div className="copyright">
					<p>
						Cosecha|Bienestar Es tu Banco de Confianza 
					</p>
        </div>

      </div>

    </footer>

    </div>
  )
}

export default Home