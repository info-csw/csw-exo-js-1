/**
 * @typedef {Object} RGBColor
 * @property {number} r - Composante rouge (entre 0 et 255).
 * @property {number} g - Composante verte (entre 0 et 255).
 * @property {number} b - Composante bleue (entre 0 et 255).
 */

/**
 * Convertit une valeur hexadécimale en une couleur RGB.
 *
 * @param {string} colorHex - La valeur hexadécimale de la couleur (par exemple, "#FF0000").
 * @returns {RGBColor} L'objet représentant la couleur RGB.
 */
/* eslint-disable-next-line no-unused-vars */
function hexToRgb(colorHex) {
    // Supprimer le caractère "#" s'il est présent
    const hex = colorHex.replace("#", "");

    // Vérifier si la valeur hexadécimale est valide
    const hexRegex = /^[0-9A-Fa-f]{6}$/; // Regex pour une valeur hexadécimale valide
    if (!hexRegex.test(hex)) {
        return undefined;
    }

    // Extraire les composantes R, G et B
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(4, 2), 16);
    const b = parseInt(hex.substring(6, 4), 16);

    return { r, g, b };
}

/**
 * Normalise les composantes RGB d'une couleur. Convertit les valeurs de 0-255 à 0-1 (RGB normalisées)
 *
 * @param {RGBColor} colorRgb - L'objet représentant la couleur RGB à normaliser.
 * @returns {RGBColor} L'objet représentant la couleur RGB normalisée.
 */
function normalizeRgb(colorRgb) {
    const r = colorRgb.r / 255;
    const g = colorRgb.g / 255;
    const b = colorRgb.b / 255;

    return { r, g, b };
}

/**
 * Calcule la luminosité relative d'un composant de couleur.
 *
 * @param {number} colorComponent - Le composant de couleur (R, G ou B) normalisé à évaluer.
 * @returns {number} La luminosité relative du composant de couleur (entre 0 et 1).
 */
function relativeLuminosityComponent(colorComponent) {
    //Source : https://www.w3.org/WAI/GL/wiki/Relative_luminance (WCAG)
    return colorComponent <= 0.03928 ? colorComponent / 12.92 : Math.pow((colorComponent + 0.055) / 1.055, 2.4);
}

/**
 * Calcule la luminosité relative d'une couleur RGB.
 *
 * @param {RGBColor} colorRgb - L'objet représentant la couleur RGB à évaluer.
 * @returns {number} La valeur de la luminosité relative de la couleur (entre 0 et 1).
 */
function relativeLuminosity(colorRgb) {
    const color = normalizeRgb(colorRgb);
    const r = relativeLuminosityComponent(color.r);
    const g = relativeLuminosityComponent(color.g);
    const b = relativeLuminosityComponent(color.b);

    //Source : https://www.w3.org/WAI/GL/wiki/Relative_luminance (WCAG)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calcule l'indice de contraste entre deux couleurs.
 *
 * @param {RGBColor} color1 - L'objet représentant la première couleur RGB.
 * @param {RGBColor} color2 - L'objet représentant la deuxième couleur RGB.
 * @returns {number} L'indice de contraste entre les deux couleurs.
 *
 */
/* eslint-disable-next-line no-unused-vars */
function contrastRatio(color1, color2) {
    const bckRelativeLuminosity = relativeLuminosity(color1);
    const textRelativeLuminosity = relativeLuminosity(color2);

    // Calcul de l'indice de contraste - source : https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html#techniques (WCAG)
    return (Math.max(bckRelativeLuminosity, textRelativeLuminosity) + 0.05) / (Math.min(bckRelativeLuminosity, textRelativeLuminosity) + 0.05);
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = {contrastRatio, hexToRgb, relativeLuminosity, relativeLuminosityComponent, normalizeRgb};
}