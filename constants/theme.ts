export const colors = {
    background: 'white',
    card: '#0f172a',
    textPrimary: 'black',
    textSecondary: '#94a3b8',
    primary: '#3b82f6',
    danger: '#ef4444',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

export const typography = {
    title: {
        fontSize: 24,
        fontWeight: '700' as const,
        color: colors.textPrimary,
    },
    body: {
        fontSize: 16,
        color: colors.textSecondary,
    },
};