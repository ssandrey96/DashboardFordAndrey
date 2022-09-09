import { AbstractControl, FormGroup } from '@angular/forms';
export function usuarioSenhaIguaisValidator(control:AbstractControl){
  const username = control.get('userName')?.value ?? '';
  const password = control.get('password')?.value ?? '';

  if (username.trim() + password.trim()){
    return username !== password ? null: { senhaIgualUsuario:true };
  } else {
    return null;
  }
}
