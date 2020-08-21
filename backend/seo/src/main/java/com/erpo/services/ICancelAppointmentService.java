package com.erpo.services;

import org.springframework.data.repository.CrudRepository;

import com.erpo.model.CancelAppointment;

public interface ICancelAppointmentService extends CrudRepository<CancelAppointment,Long> {

}
