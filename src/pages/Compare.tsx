import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Logo from '../components/Logo';
import ComparisonArea from '../components/ComparisonArea';
import SystemGrid from '../components/SystemGrid';
import ComparisonModal from '../components/ComparisonModal';
import { Scale, Info } from 'lucide-react';
import { System } from '../types/system';
import { useComparison } from '../context/ComparisonContext';

export const Compare: React.FC = () => {
  const { selectedSystems, addSystem, removeSystem } = useComparison();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSystemSelect = (system: System) => {
    const maxSystems = isMobile ? 2 : 4;
    if (selectedSystems.length < maxSystems) {
      addSystem(system);
    }
  };

  const handleSystemRemove = (systemId: string) => {
    removeSystem(systemId);
  };

  const handleCompare = () => {
    if (selectedSystems.length >= 2) {
      setIsModalOpen(true);
    }
  };

  const handleDrop = (system: System) => {
    const maxSystems = isMobile ? 2 : 4;
    if (selectedSystems.length < maxSystems) {
      addSystem(system);
    }
  };

  return (
    <>
      <Helmet>
        <title>Porównanie systemów ERP - porównywarka ERP | Kalkulator ERP</title>
        <meta 
          name="description" 
          content="Porównaj systemy ERP dostępne w Polsce. Zestawienie funkcjonalności, cen i możliwości najpopularniejszych systemów ERP." 
        />
        <meta property="og:title" content="Porównanie systemów ERP - porównywarka ERP | Kalkulator ERP" />
        <meta 
          property="og:description" 
          content="Porównaj systemy ERP dostępne w Polsce. Zestawienie funkcjonalności i możliwości systemów ERP." 
        />
        <meta property="og:url" content="https://kalkulator-erp.com/porownaj-systemy-erp" />
        <link rel="canonical" href="https://kalkulator-erp.com/porownaj-systemy-erp" />
      </Helmet>

      <DndProvider backend={HTML5Backend}>
        <div className="min-h-screen bg-[#F5F5F7]">
          {/* Mobile sticky comparison area */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md border-t border-[#d2d2d7]/30 p-4">
            <ComparisonArea 
              selectedSystems={selectedSystems}
              onSystemRemove={handleSystemRemove}
              onCompare={handleCompare}
              onDrop={handleDrop}
              isMobile={true}
            />
          </div>

          <div className="pt-12 pb-32 lg:pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-[300px] h-[150px] mx-auto mb-8">
                  <Logo />
                </div>
                <h1 className="text-[#1d1d1f] mb-4">Porównaj systemy ERP</h1>
                <p className="text-[21px] leading-relaxed text-[#86868b]">
                  {isMobile ? 'Wybierz i porównaj do 2 systemów ERP' : 'Wybierz i porównaj do 4 systemów ERP'}
                </p>
              </div>

              <div className="mb-8">
                <div className="sf-card p-6 bg-[#F5F5F7]">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-[#0066CC] flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">
                        Jak porównać systemy ERP?
                      </h2>
                      <ol className="list-decimal list-inside space-y-2 text-[15px] text-[#1d1d1f]">
                        <li>Przeciągnij wybrane systemy ERP do obszaru porównania</li>
                        <li>Możesz wybrać {isMobile ? '2' : 'od 2 do 4'} systemy do porównania</li>
                        <li>Kliknij przycisk "Porównaj systemy" aby zobaczyć szczegółowe zestawienie</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Main content */}
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Scale className="w-6 h-6 text-[#2c3b67]" />
                    <h2 className="text-[24px] font-semibold text-[#1d1d1f]">
                      Dostępne systemy ERP
                    </h2>
                  </div>
                  
                  <SystemGrid 
                    onSystemSelect={handleSystemSelect}
                    selectedSystems={selectedSystems}
                  />
                </div>

                {/* Desktop comparison area */}
                <div className="hidden lg:block lg:col-span-4">
                  <div className="sticky" style={{ top: 'calc(3.5rem + 1.5rem)' }}>
                    <ComparisonArea 
                      selectedSystems={selectedSystems}
                      onSystemRemove={handleSystemRemove}
                      onCompare={handleCompare}
                      onDrop={handleDrop}
                      isMobile={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ComparisonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          systems={selectedSystems}
        />
      </DndProvider>
    </>
  );
};
