export const UserActionTypes = {
    LOGOUT: "USERS_LOGOUT",
};

export function logout() {
    return { type: UserActionTypes.LOGOUT };
}
