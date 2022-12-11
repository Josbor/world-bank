import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import './login.scss'
import { useStoreControl } from '../../hooks/useStoreControl';
import { useEffect } from 'react';
import { generateLink } from '../../api/data'

const login = () => {
  const { id } = useParams();
  const { bankDetails, getBankDetails } = useStoreControl()
  const [values, setValues] = useState<any>({
    user: '',
    password: '',
    showPassword: false,
  })

  const handleChange =(prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };



  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { user, password } = values
    const response= await generateLink(bankDetails.name,user,password)
    console.log({ response})
  }

  useEffect(() => {

    if (id) getBankDetails(Number(id))

  }, [])

  return (
    <div>
      <Header header={{ path: '/banks', tittle: 'Credenciales Personales', help: "Ingrese se sus credenciales para ingresar al banco" }} />
      <div className='login-container'>
        
          <img src={bankDetails.text_logo} alt="" />
        
        <div >

          {/* FORMULARIO LOGIN */}

          <form onSubmit={handleSubmit}>
            {/* USER INPUT */}
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" fullWidth>
              <InputLabel htmlFor="component-outlined">Usuario</InputLabel>
              <OutlinedInput
              fullWidth
                id="component-outlined"
                value={values.user}
                onChange={handleChange('user')}
                label="Name"
              />
            </FormControl>
            {/* PASSWORD INPUT */}
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" fullWidth>
              <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
              <OutlinedInput
              fullWidth
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button fullWidth variant="outlined" type='submit' disabled={!(values.user && values.password) ? true : false}>enviar</Button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default login