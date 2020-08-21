package com.erpo.services;

import org.springframework.data.repository.CrudRepository;

import com.erpo.model.Appointment;

public interface IAppointmentService extends CrudRepository<Appointment	, Long>  {

}
