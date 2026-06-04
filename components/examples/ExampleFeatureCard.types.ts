export interface IExampleFeatureCardMetric {
  label: string;
  value: string;
}

export interface IExampleFeatureCardAction {
  label: string;
  href?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export interface IExampleFeatureCardProps {
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  metrics?: IExampleFeatureCardMetric[];
  action?: IExampleFeatureCardAction;
}
