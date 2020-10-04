import { NavigationGuard } from 'vue-router';

// types
declare global {
    type Next = Parameters<NavigationGuard>[2]
}