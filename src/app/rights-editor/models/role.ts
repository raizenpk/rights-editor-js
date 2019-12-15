export interface Role {
  id: string;
  displayName: string;
  permissions: Permission[];
}

export interface Permission {
  resource: string;
  operation: string[];
}
