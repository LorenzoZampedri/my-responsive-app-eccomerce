    import Header from './Header';
    import Footer from './Footer';
    import { Outlet } from 'react-router-dom';

    const Layout = () => {
      return (
        <div className="min-h-screen flex flex-col bg-gray-100">
          <Header/>
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      );
    };

    export default Layout;