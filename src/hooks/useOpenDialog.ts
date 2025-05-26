import { reactive, type UnwrapRef } from 'vue'

export type dialogType<T = string> = {
  visible: boolean
  title: 'add' | 'permissions' | 'edit' | '' | 'del' | 'check' | T
}

export function useOpenDialog<T = ''>() {
  const dialog = reactive<dialogType<T>>({
    visible: false,
    title: ''
  })

  function openDialog(title: dialogType<UnwrapRef<T>>['title']) {
    dialog.visible = true
    dialog.title = title
  }

  return Object.assign([dialog, openDialog], {
    dialog,
    openDialog
  }) as unknown as [UnwrapRef<dialogType<T>>, (title: dialogType<T>['title']) => void] & {
    dialog: UnwrapRef<dialogType<T>>
    openDialog: (title: dialogType<T>['title']) => void
  }
}
