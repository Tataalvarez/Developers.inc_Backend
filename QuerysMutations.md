***----------------------------------------------  Sprint 2 -----------------------------------------------***

**Advances:**
```
query getAdvance($getAdvanceId: ID!,){
  getAdvance(id: $getAdvanceId) {
    id
    descripcion
    observaciones
    proyecto
    creadoPor
  } 
}

query getAdvances {
  getAdvances {
    id
    descripcion
    observaciones
    proyecto
    creadoPor
  } 
}

mutation newAdvance($input: AdvanceInput){
  newAdvance(input: $input) {
    id
    descripcion
    observaciones
    proyecto
    creadoPor
  }
}

mutation updateAdvance($input: AdvanceInput, $id: ID!, ){
  updateAdvance(input: $input, id: $id,) {
    id
    descripcion
    observaciones
    proyecto
    creadoPor
  }
}

mutation deleteAdvance($id: ID!,){
  deleteAdvance(id: $id, ) 
}
```
