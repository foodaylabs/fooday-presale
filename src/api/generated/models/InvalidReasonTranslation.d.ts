import type { Option } from './Option';
import type { ReportType } from './ReportType';
export type InvalidReasonTranslation = (Option & {
    type: ReportType;
    description: string;
    question: string;
});
