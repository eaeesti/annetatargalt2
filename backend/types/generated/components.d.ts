import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'white', 'text']>;
    arrow: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    size: Attribute.Enumeration<['sm', 'md', 'lg']> & Attribute.DefaultTo<'md'>;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'medium';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    shareImage: Attribute.Media;
  };
}

export interface MetaNavbar extends Schema.Component {
  collectionName: 'components_elements_navbars';
  info: {
    displayName: 'Navbar';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    ctaButton: Attribute.Component<'elements.button'>;
    links: Attribute.Component<'elements.link', true>;
  };
}

export interface SectionsCtaSection extends Schema.Component {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'CtaSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    buttons: Attribute.Component<'elements.button', true>;
  };
}

export interface SectionsHeroSection extends Schema.Component {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    buttons: Attribute.Component<'elements.button', true>;
  };
}

export interface SectionsTextSection extends Schema.Component {
  collectionName: 'components_sections_text_sections';
  info: {
    displayName: 'TextSection';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button': ElementsButton;
      'elements.link': ElementsLink;
      'meta.metadata': MetaMetadata;
      'meta.navbar': MetaNavbar;
      'sections.cta-section': SectionsCtaSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.text-section': SectionsTextSection;
    }
  }
}
