import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    'school/OO-INTRO.md',
    'school/01-OVERVIEW.md',
    'school/02-DEV-SETUP.md',
    'school/03-LAB-PROJECT-SETUP.md',
    'school/04-PACKAGE-MANAGEMENT.md',
    'school/05-LAB-PKG-MANAGEMENT.md',
    'school/06-MAIN-FRAMEWORKS.md',
    'school/07-LAB-FLASK-SQLALCHEMY-FWKs.md',
  ];
}

function introSlides() {
  return ['intro/00-TITLE.md', 'intro/01-SPEAKER-TINE-KONDO.md', 'intro/02-OBJECTIVES.md'];
}

function formation() {
  return [
    //
    ...introSlides(), //
    ...schoolSlides(), //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
