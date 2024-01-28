"use client"
/**
 * Laster ned en fil fra en blob.
 * Ved å lage en <a/> tag og klikke på den programmatisk, lastes filen ned. Deretter slettes taggen.
 * Må kalles fra klienten, siden den bruker DOM.
 * @param blob En Blob som representerer filen som skal lastes ned.
 * @param filename Navnet på filen som blir lastet ned.
 */
export function downloadFile(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = filename
    link.href = url
    link.click()
    link.remove()
}
