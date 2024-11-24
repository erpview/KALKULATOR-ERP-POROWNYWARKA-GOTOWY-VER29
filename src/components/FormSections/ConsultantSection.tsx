import React from 'react';
import { UserCheck } from 'lucide-react';

interface ConsultantSectionProps {
  selectedConsultants: string[];
  onConsultantChange: (consultant: string) => void;
}

export const ConsultantSection: React.FC<ConsultantSectionProps> = ({
  selectedConsultants,
  onConsultantChange
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <UserCheck className="w-6 h-6 text-[#0066CC]" />
        <h3 className="text-[21px] font-semibold text-[#1d1d1f]">
          Chciałbym również otrzymać analizę od niezależnego konstultanta
        </h3>
      </div>

      <div className="space-y-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={selectedConsultants.includes('zelinski')}
            onChange={() => onConsultantChange('zelinski')}
            className="sf-checkbox mt-1"
          />
          <span className="text-[15px] text-[#1d1d1f]">
            Jarosław Żeliński - IT Consulting
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={selectedConsultants.includes('pieklik')}
            onChange={() => onConsultantChange('pieklik')}
            className="sf-checkbox mt-1"
          />
          <span className="text-[15px] text-[#1d1d1f]">
            Janusz Pieklik - Business Global Consulting Polska Sp. z o.o.
          </span>
        </label>
      </div>
    </div>
  );
};