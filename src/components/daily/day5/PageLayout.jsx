import Header from '../../Header';
import Footer from '../../Footer';

function PageLayout({ children, sidebar }) {
    return (
        <div className="page-layout">
            <Header />
            <div className="page-content" style={{ display: 'flex' }}>
                {sidebar && <aside className="page-sidebar">{sidebar}</aside>}
                <main className="page-main" style={{ flex: 1 }}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default PageLayout;
