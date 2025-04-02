# Guía de Contribución 🤝

¡Gracias por tu interés en contribuir a La Multisig Wiki! Este documento proporciona las pautas y procesos para contribuir a nuestro proyecto.

## ¿Cómo Puedo Contribuir? 🌟

### Contenido 📝

1. **Nuevos Artículos**
   - Asegúrate de que el tema sea relevante para Web3/blockchain
   - Usa español claro y accesible
   - Incluye ejemplos prácticos cuando sea posible
   - Sigue nuestra estructura MDX establecida

2. **Mejoras de Contenido Existente**
   - Correcciones de errores
   - Actualizaciones de información
   - Mejoras en la claridad
   - Adición de ejemplos

### Código 💻

1. **Mejoras Técnicas**
   - Optimizaciones de rendimiento
   - Mejoras de accesibilidad
   - Correcciones de bugs
   - Nuevas características

2. **Documentación Técnica**
   - Documentación del código
   - Guías de configuración
   - Ejemplos de uso

## Proceso de Contribución 🔄

1. **Antes de Empezar**
   - Revisa los [issues existentes](https://github.com/lamultisig/lamultisig-wiki/issues)
   - Verifica que no haya PRs similares abiertos
   - Para cambios grandes, abre primero un issue para discutirlo

2. **Preparación**
   ```bash
   # Fork el repositorio desde GitHub.com
   # Visita https://github.com/lamultisig/lamultisig-wiki
   # Haz clic en el botón "Fork" en la esquina superior derecha

   # Clona tu fork
   git clone https://github.com/TU-USERNAME/lamultisig-wiki
   cd lamultisig-wiki
   
   # Instala dependencias
   pnpm install
   
   # Crea una rama para tus cambios
   git checkout -b feature/tu-caracteristica
   ```

3. **Desarrollo**
   - Sigue las convenciones de código existentes
   - Utilizamos [Conventional Commits](https://www.conventionalcommits.org/) para nuestros mensajes de commit:
     ```bash
     # Formato: <tipo>[ámbito opcional]: <descripción>
     
     # Ejemplos:
     feat: añadir nueva página sobre bridges
     fix(docs): corregir enlaces rotos en la sección de wallets
     docs: actualizar guía de contribución
     chore: actualizar dependencias
     style: formatear archivos MDX
     refactor: reorganizar estructura de contenido
     test: añadir pruebas para la búsqueda
     ```
   - Tipos de commit permitidos:
     - `feat`: Nuevas características
     - `fix`: Correcciones de errores
     - `docs`: Cambios en documentación
     - `style`: Cambios de formato (espacios, comas, etc)
     - `refactor`: Refactorización de código
     - `test`: Añadir o corregir pruebas
     - `chore`: Tareas de mantenimiento, actualizaciones
     - `perf`: Mejoras de rendimiento
   - Escribe commits claros y concisos
   - Mantén los cambios enfocados y atómicos
   - Asegúrate de firmar tus commits:
     ```bash
     git commit -m "tipo: mensaje descriptivo"
     ```

4. **Pruebas**
   - Asegúrate de que la build pasa localmente
   - Prueba tus cambios localmente
   - Verifica que no hay errores de lint

5. **Envío de Cambios**
   - Sube tus cambios a tu fork:
     ```bash
     git push origin feature/tu-caracteristica
     ```
   - Visita el repositorio original en GitHub
   - Crea un Pull Request desde tu rama
   - Proporciona un título claro y descriptivo
   - Describe detalladamente tus cambios en la descripción
   - Vincula cualquier issue relacionado
   - Espera la revisión de los mantenedores

### Reglas de Protección de Ramas

Nuestro repositorio implementa reglas de protección de ramas para mantener la integridad del código. Aquí están los requisitos principales:

1. **Rama Principal (`main`)**
   - No se permiten pushes directos
   - Todos los cambios deben pasar por un Pull Request
   - Se requiere al menos una aprobación de un revisor
   - Los checks de CI deben pasar antes del merge
   - Los commits deben estar firmados
   - Todas las conversaciones deben estar resueltas

2. **Pull Requests**
   - Deben estar actualizados con la rama principal
   - Deben pasar todas las verificaciones automatizadas
   - Requieren al menos una aprobación
   - Los commits deben estar firmados
   - Se debe mantener un historial lineal

## Estructura de los Artículos 📚

Los artículos deben seguir esta estructura básica:

```mdx
---
title: Título del Artículo
description: Breve descripción del contenido
icon: IconName
---

# Título Principal

## Introducción
Contexto y descripción general...

## Conceptos Principales
Explicación detallada...

## Ejemplos Prácticos
Casos de uso y ejemplos...

## Consideraciones
Advertencias, mejores prácticas...

## Recursos Adicionales
Enlaces y referencias...
```

## Estilo de Escritura ✍️

- Usa español neutro y profesional
- Evita jerga innecesaria
- Explica los términos técnicos
- Usa ejemplos del mundo real
- Mantén los párrafos concisos
- Incluye imágenes/diagramas cuando ayuden

## ¿Necesitas Ayuda? 🤔

- Revisa nuestra [documentación](https://lamultisig.xyz/docs)
- Únete a nuestro [Telegram](https://t.me/lamultisig)
- Abre un issue con tu pregunta
- Para ayuda con firmas de commits o configuración de GPG, consulta la [documentación de GitHub sobre firmas de commits](https://docs.github.com/es/authentication/managing-commit-signature-verification)

## Código de Conducta 🤝

Este proyecto se adhiere a nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que respetes este código.