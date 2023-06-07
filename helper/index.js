export const generarId = () => {
    const random = Date().toString(36).substring(2);

    return random;
}