<img width="857" height="254" alt="Group 22 (1)" src="https://github.com/user-attachments/assets/fc7bda15-6e40-43f9-a58e-d5504e46a3d8" />

# Comienza con un comando o clona los repositorios

La CLI necesita actualización, aún no la he actualizado, se recomienda simplemente clonar el repositorio
    npx create-expo-plate mi aplicación

- **Base de Expo** – Incluye:
  - Flujo de integración
  - Integración de paywall
  - Componentes de HeroUI Native
  - Uniwind (Tailwind CSS para React Native)

- **Completo de Expo (Convex + Clerk)** – Incluye todo en **Base de Expo**, más:
  - Configuración de Convex (backend y base de datos)
  - Autenticación de Clerk

## ⚠️ Notas Importantes

- Algunos paquetes requerirán una compilación de desarrollo, no puedes ejecutarlo en expo go, por favor lee la sección **Ejecuta la aplicación** para ejecutarlo correctamente

- Si tu aplicación se bloquea en producción, podría deberse a variables de entorno faltantes en el tablero de EAS. Ya sea que codifiques las ENV o las cargues desde EAS.

- No olvides cambiar `"package": "change.pkg.name"` en `app.json` antes de empujar la versión inicial de la aplicación.

- El soporte para iPad está deshabilitado por defecto. Para reactivarlo, cambia `"UIDeviceFamily": [1]` a `[1, 2]` en la configuración de tu proyecto.

## Características

-   **HeroUI Native**: Hermosos componentes preconstruidos.
-   **Uniwind**: Tailwind CSS para Nativo (sin sobrecarga en tiempo de ejecución).
-   **Flujo de Integración**: Pantallas listas para usar para la integración de usuarios.
-   **Pagos**: Integrado RevenueCat (`react-native-purchases`) para suscripciones/IAP.

## Demo 📱

<p align="center">
  <a href="https://player.cloudinary.com/embed/?cloud_name=dzvttwdye&public_id=1a683b93-1dae-4659-b526-faf53424fd11_itmlmu">
    <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2JybTgxbzUwNW9mMnBnbmkxNnJsdTJsNWV4YXI5b3U4a20xanQwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9oR33y6nOn5chlEqw3/giphy.gif" alt="Demo GIF" />
  </a>
</p>

## Comienza con el Proyecto

Para convex + clerk por favor mira en  <a href='https://github.com/zuraHQ/expo-plate-starter/tree/main/expo-convex-clerk'>este readme:</a>

1. **Instalar Dependencias**

    ```bash
    cd expo-plate
    bun install

    # Prebuild
    ios:
    npx expo prebuild --platform ios

    android:
    npx expo prebuild --platform android
    ```

2. **Ejecuta la aplicación**
    ```bash
    npx expo run:ios --device
    ```

    o

    ```bash
    npx expo run:android --device
    ```

Eso es todo. Comienza a editar `src/app/` para construir tu producto.

## Comienza con RevenueCat 💲

1. Cambia el paquete de aplicación en `app.json` al paquete de tu aplicación (que coincide con revenuecat)

2. Añade tu clave API de RevenueCat y tus derechos en `config/revenuecat.ts`

## HeroUI Native 🎨

([HeroUI Native](https://github.com/heroui-inc/heroui-native))

## 📂 Estructura del Proyecto

```
expo-plate/
├── app.json             # Configuración de Expo
├── package.json         # Dependencias y scripts
├── src/
│   ├── app/             # Pantallas y diseños de Expo Router
│   │   ├── (tabs)/      # Grupo de navegación por pestañas
│   │   └── onboarding/  # Flujo de integración
│   ├── components/      # Componentes de interfaz reutilizables
│   ├── contexts/        # Proveedores de contexto de React
│   ├── helpers/         # Funciones de utilidad
│   └── themes/          # Configuración de temas
├── assets/              # Imágenes y fuentes
├── scripts/             # Scripts de ayuda
└── ...
```

## Historia de Estrellas

<img width="1832" height="1404" alt="star-history-2026330" src="https://github.com/user-attachments/assets/c500e6ff-8fb1-4a4e-9f6e-4b64c50eae26" />
