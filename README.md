# Projet : Outil de calcul du ratio de contraste - Amélioration de l'accessibilité des couleurs

## Introduction
Dans le cadre de ce projet, nous allons développer un outil JavaScript permettant de calculer le ratio de contraste entre deux couleurs. L'objectif est d'améliorer l'accessibilité des applications web en garantissant une lisibilité optimale pour tous les utilisateurs, y compris ceux ayant des limitations visuelles.

### Règles d'accessibilité WCAG :
Le WCAG (Web Content Accessibility Guidelines) établit des recommandations pour rendre les contenus web accessibles à tous. Dans le cadre de notre projet, nous nous conformerons aux règles d'accessibilité WCAG en matière de contraste de couleurs, en particulier à la règle 1.4.3 qui définit les ratios de contraste recommandés.

- WCAG Ratio de contraste recommandé :
  - Petit texte : Ratio de contraste d'au moins 4,5:1.
  - Texte normal : Ratio de contraste d'au moins 3:1.

En respectant ces règles, nous nous assurerons que les combinaisons de couleurs utilisées dans nos applications web offrent une lisibilité adéquate pour tous les utilisateurs, y compris ceux ayant des limitations visuelles.

## Phase 1 : Découpe logique
1. Conversion de couleurs : Nous commencerons par mettre en place une fonction de conversion pour convertir les codes hexadécimaux en valeurs RGB. Cela nous permettra d'obtenir une représentation normalisée des couleurs.
2. Calcul du ratio de contraste : Nous implémenterons une fonction pour calculer le ratio de contraste entre deux couleurs. Ce ratio est essentiel pour évaluer la lisibilité des éléments visuels à l'écran.
3. Validation des valeurs de contraste : Nous mettrons en place des mécanismes de validation pour vérifier si le ratio de contraste obtenu respecte les normes d'accessibilité recommandées.
4. Interface utilisateur interactive : Nous ajouterons une interface utilisateur permettant aux utilisateurs de sélectionner les couleurs à comparer et d'afficher le ratio de contraste calculé en temps réel.
5. Améliorations visuelles : Nous enrichirons l'interface utilisateur en ajoutant des éléments visuels pour représenter graphiquement le niveau de contraste et fournir des recommandations pour améliorer la lisibilité des couleurs.

## Phase 2 : Fonctions de calcul du ratio de contraste
Dans cette phase, nous nous concentrerons sur les fonctions de calcul du ratio de contraste sans ajouter d'interface utilisateur. Le code sera organisé de la manière suivante :
- Fonction `hexToRgb` : Convertit une valeur hexadécimale en une couleur RGB.
- Fonction `normalizeRgb` : Normalise les composantes RGB d'une couleur pour les convertir de l'échelle 0-255 à l'échelle 0-1.
- Fonction `relativeLuminosityComponent` : Calcule la luminosité relative d'un composant de couleur normalisé.
- Fonction `relativeLuminosity` : Calcule la luminosité relative d'une couleur RGB en utilisant les composantes normalisées.
- Fonction `contrastRatio` : Calcule le ratio de contraste entre deux couleurs en utilisant les fonctions de luminosité relative.

## Phase 3 : Ajout de l'interface utilisateur
Dans cette phase, nous ajouterons une interface utilisateur interactive permettant aux utilisateurs de sélectionner les couleurs à comparer et d'afficher le ratio de contraste calculé en temps réel.

N'hésitez pas à poser des questions ou à demander des clarifications tout au long du développement de l'outil.
