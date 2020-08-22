package com.erpo.services;

import org.springframework.data.repository.CrudRepository;

import com.erpo.model.DoctorInfo;

public interface IDoctorInfoService extends CrudRepository<DoctorInfo,Long> {

}
